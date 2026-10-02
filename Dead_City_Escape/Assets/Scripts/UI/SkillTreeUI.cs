// ---------------------------------------------------------------------------
// Dead City Escape - Skill Tree UI
// Visual skill tree with three branches: Stealth, Combat, Survival.
// Touch-friendly skill nodes with unlock/preview.
// ---------------------------------------------------------------------------
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using DeadCityEscape.Core;
using DeadCityEscape.Logic;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Manages the skill tree menu display and interaction.
    /// Displays 12 skill nodes in 3 branches × 4 tiers.
    /// Shows unlock state, prerequisites, descriptions.
    /// Calls SkillTreeData.Unlock on tap if CanUnlock returns true.
    /// </summary>
    public class SkillTreeUI : MonoBehaviour
    {
        [Header("Panel")]
        [SerializeField] private GameObject _panel;
        [SerializeField] private Button _closeButton;

        [Header("Skill Points")]
        [SerializeField] private TextMeshProUGUI _skillPointsText;
        [SerializeField] private TextMeshProUGUI _playerLevelText;

        [Header("Branches")]
        [SerializeField] private Transform _stealthBranch;
        [SerializeField] private Transform _combatBranch;
        [SerializeField] private Transform _survivalBranch;

        [Header("Node Prefab")]
        [SerializeField] private GameObject _skillNodePrefab;

        [Header("Detail Panel")]
        [SerializeField] private GameObject _detailPanel;
        [SerializeField] private TextMeshProUGUI _detailNameText;
        [SerializeField] private TextMeshProUGUI _detailDescriptionText;
        [SerializeField] private TextMeshProUGUI _detailCostText;
        [SerializeField] private TextMeshProUGUI _detailPrereqText;
        [SerializeField] private Button _unlockButton;

        [Header("Colors")]
        [SerializeField] private Color _lockedColor = Color.gray;
        [SerializeField] private Color _availableColor = Color.yellow;
        [SerializeField] private Color _unlockedColor = new Color(0, 1, 0.8f);

        private SkillTreeData _skillTree;
        private Dictionary<string, SkillNodeUI> _nodeUIs = new Dictionary<string, SkillNodeUI>();
        private string _selectedSkillId;

        private class SkillNodeUI
        {
            public GameObject GameObject;
            public Button Button;
            public Image BackgroundImage;
            public TextMeshProUGUI NameText;
            public TextMeshProUGUI TierText;
            public Image LockIcon;
        }

        private void Start()
        {
            _skillTree = new SkillTreeData();

            if (_closeButton != null)
                _closeButton.onClick.AddListener(Hide);

            if (_unlockButton != null)
                _unlockButton.onClick.AddListener(OnUnlockButtonClicked);

            BuildSkillNodes();
            LoadSkillsFromSave();
            Hide();
        }

        public void Show()
        {
            if (_panel != null) _panel.SetActive(true);
            Time.timeScale = 0f;
            RefreshDisplay();
        }

        public void Hide()
        {
            if (_panel != null) _panel.SetActive(false);
            if (_detailPanel != null) _detailPanel.SetActive(false);
            Time.timeScale = 1f;
        }

        public void SetSkillPoints(int points)
        {
            _skillTree.AddPoints(points);
            RefreshDisplay();
        }

        private void LoadSkillsFromSave()
        {
            if (SaveSystem.Instance == null) return;

            var unlockedSkills = SaveSystem.Instance.GetUnlockedSkillIds();
            foreach (var skillId in unlockedSkills)
            {
                var skill = _skillTree.GetSkill(skillId);
                if (skill != null)
                {
                    skill.IsUnlocked = true;
                }
            }
        }

        private void SaveSkillsToSave()
        {
            if (SaveSystem.Instance == null) return;

            var unlockedIds = new List<string>();
            foreach (var node in _skillTree.Nodes.Values)
            {
                if (node.IsUnlocked)
                    unlockedIds.Add(node.Id);
            }
            SaveSystem.Instance.SaveSkills(unlockedIds.ToArray());
        }

        private void BuildSkillNodes()
        {
            if (_skillNodePrefab == null) return;

            BuildBranch(SkillBranch.Stealth, _stealthBranch);
            BuildBranch(SkillBranch.Combat, _combatBranch);
            BuildBranch(SkillBranch.Survival, _survivalBranch);
        }

        private void BuildBranch(SkillBranch branch, Transform parent)
        {
            if (parent == null) return;

            var skills = _skillTree.GetBranchSkills(branch);
            foreach (var skill in skills)
            {
                var nodeObj = Instantiate(_skillNodePrefab, parent);
                nodeObj.name = $"SkillNode_{skill.Id}";

                var nodeUI = new SkillNodeUI
                {
                    GameObject = nodeObj,
                    Button = nodeObj.GetComponent<Button>(),
                    BackgroundImage = nodeObj.GetComponent<Image>()
                };

                // Find child components
                var texts = nodeObj.GetComponentsInChildren<TextMeshProUGUI>();
                if (texts.Length > 0) nodeUI.NameText = texts[0];
                if (texts.Length > 1) nodeUI.TierText = texts[1];

                var images = nodeObj.GetComponentsInChildren<Image>();
                if (images.Length > 1) nodeUI.LockIcon = images[1];

                // Set initial text
                if (nodeUI.NameText != null)
                    nodeUI.NameText.text = skill.Name;
                if (nodeUI.TierText != null)
                    nodeUI.TierText.text = $"Tier {skill.Tier}";

                // Add click listener
                if (nodeUI.Button != null)
                {
                    string skillId = skill.Id;
                    nodeUI.Button.onClick.AddListener(() => OnSkillNodeClicked(skillId));
                }

                _nodeUIs[skill.Id] = nodeUI;
            }
        }

        private void OnSkillNodeClicked(string skillId)
        {
            _selectedSkillId = skillId;
            ShowSkillDetail(skillId);
        }

        private void ShowSkillDetail(string skillId)
        {
            var skill = _skillTree.GetSkill(skillId);
            if (skill == null) return;

            if (_detailPanel != null) _detailPanel.SetActive(true);

            if (_detailNameText != null)
                _detailNameText.text = skill.Name;

            if (_detailDescriptionText != null)
            {
                string desc = skill.Description;
                
                // Add effects to description
                if (skill.Effects.Count > 0)
                {
                    desc += "\n\nEffects:";
                    foreach (var effect in skill.Effects)
                    {
                        desc += $"\n• {effect.Key}: {effect.Value}";
                    }
                }
                
                _detailDescriptionText.text = desc;
            }

            if (_detailCostText != null)
                _detailCostText.text = $"Cost: {skill.PointCost} SP";

            if (_detailPrereqText != null)
            {
                if (skill.Prerequisites != null && skill.Prerequisites.Length > 0)
                {
                    string prereqText = "Prerequisites:\n";
                    foreach (var prereqId in skill.Prerequisites)
                    {
                        var prereq = _skillTree.GetSkill(prereqId);
                        if (prereq != null)
                        {
                            string status = prereq.IsUnlocked ? "✓" : "✗";
                            prereqText += $"{status} {prereq.Name}\n";
                        }
                    }
                    _detailPrereqText.text = prereqText;
                }
                else
                {
                    _detailPrereqText.text = "No prerequisites";
                }
            }

            // Update unlock button
            if (_unlockButton != null)
            {
                bool canUnlock = _skillTree.CanUnlock(skillId);
                _unlockButton.interactable = canUnlock && !skill.IsUnlocked;
                
                var buttonText = _unlockButton.GetComponentInChildren<TextMeshProUGUI>();
                if (buttonText != null)
                {
                    if (skill.IsUnlocked)
                        buttonText.text = "UNLOCKED";
                    else if (canUnlock)
                        buttonText.text = "UNLOCK";
                    else
                        buttonText.text = "LOCKED";
                }
            }
        }

        private void OnUnlockButtonClicked()
        {
            if (string.IsNullOrEmpty(_selectedSkillId)) return;

            if (_skillTree.CanUnlock(_selectedSkillId))
            {
                if (_skillTree.Unlock(_selectedSkillId))
                {
                    // Apply skill effect to player
                    ApplySkillEffect(_selectedSkillId);
                    
                    // Save to disk
                    SaveSkillsToSave();
                    
                    // Refresh UI
                    RefreshDisplay();
                    ShowSkillDetail(_selectedSkillId);
                }
            }
        }

        private void ApplySkillEffect(string skillId)
        {
            var skill = _skillTree.GetSkill(skillId);
            if (skill == null) return;

            // Note: Most skill effects are applied by the respective systems
            // (PlayerController, PlayerHealth, etc.) when they check SaveSystem
            // for unlocked skills. This method is kept for immediate feedback
            // or special cases that need instant application.

            var health = FindAnyObjectByType<Player.PlayerHealth>();

            foreach (var effect in skill.Effects)
            {
                switch (effect.Key)
                {
                    case "max_health":
                        // Tough Skin: +20% max health
                        if (health != null)
                        {
                            float newMax = health.MaxHealth + 20f;
                            health.SetMaxHealth(newMax);
                        }
                        break;

                    case "passive_regen":
                    case "regen_rate":
                        // Second Wind: passive regen
                        if (health != null)
                            health.SetRegenRate(effect.Value);
                        break;

                    // Other effects are applied by their respective systems
                    // when they check SaveSystem.GetUnlockedSkillIds()
                    default:
                        break;
                }
            }
        }

        private void RefreshDisplay()
        {
            // Update skill points display
            if (_skillPointsText != null)
                _skillPointsText.text = $"Skill Points: {_skillTree.AvailablePoints}";

            // Update player level display
            if (_playerLevelText != null && GameManager.Instance != null)
                _playerLevelText.text = $"Level {GameManager.Instance.PlayerLevel}";

            // Update all skill nodes
            foreach (var kvp in _nodeUIs)
            {
                var skill = _skillTree.GetSkill(kvp.Key);
                if (skill == null) continue;

                var nodeUI = kvp.Value;

                // Update background color
                if (nodeUI.BackgroundImage != null)
                {
                    if (skill.IsUnlocked)
                    {
                        nodeUI.BackgroundImage.color = _unlockedColor;
                    }
                    else if (_skillTree.CanUnlock(kvp.Key))
                    {
                        nodeUI.BackgroundImage.color = _availableColor;
                    }
                    else
                    {
                        nodeUI.BackgroundImage.color = _lockedColor;
                    }
                }

                // Update lock icon visibility
                if (nodeUI.LockIcon != null)
                {
                    nodeUI.LockIcon.gameObject.SetActive(!skill.IsUnlocked);
                }

                // Update button interactability
                if (nodeUI.Button != null)
                {
                    nodeUI.Button.interactable = !skill.IsUnlocked;
                }
            }
        }
    }
}
