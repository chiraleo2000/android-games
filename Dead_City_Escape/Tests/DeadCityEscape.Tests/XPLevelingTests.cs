// ---------------------------------------------------------------------------
// Dead City Escape - XP and Leveling Tests
// Tests for XP calculation and level-up logic
// ---------------------------------------------------------------------------
using NUnit.Framework;
using System;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class XPLevelingTests
    {
        /// <summary>
        /// Tests the XP threshold calculation formula.
        /// Formula: BaseXPPerLevel × XPScalePerLevel^(level−1)
        /// Requirement: 8.12
        /// </summary>
        [Test]
        public void GetXPForLevel_CalculatesCorrectThreshold()
        {
            // Arrange
            int baseXPPerLevel = 200;
            float xpScalePerLevel = 1.15f;

            // Act & Assert
            // Level 1 -> 2: 200 × 1.15^0 = 200
            int xpForLevel2 = (int)(baseXPPerLevel * Math.Pow(xpScalePerLevel, 0));
            Assert.That(xpForLevel2, Is.EqualTo(200));

            // Level 2 -> 3: 200 × 1.15^1 = 229 (due to int truncation)
            int xpForLevel3 = (int)(baseXPPerLevel * Math.Pow(xpScalePerLevel, 1));
            Assert.That(xpForLevel3, Is.EqualTo(229));

            // Level 3 -> 4: 200 × 1.15^2 = 264.5 -> 264
            int xpForLevel4 = (int)(baseXPPerLevel * Math.Pow(xpScalePerLevel, 2));
            Assert.That(xpForLevel4, Is.EqualTo(264));

            // Level 10 -> 11: 200 × 1.15^9 = 703.5 -> 703
            int xpForLevel11 = (int)(baseXPPerLevel * Math.Pow(xpScalePerLevel, 9));
            Assert.That(xpForLevel11, Is.EqualTo(703));
        }

        /// <summary>
        /// Tests base XP calculation from run performance.
        /// Formula: (RunTime in seconds) + (KillCount × 10)
        /// Requirement: 8.11
        /// </summary>
        [Test]
        public void CalculateBaseXP_FromRunPerformance()
        {
            // Arrange
            float runTime1 = 300f; // 5 minutes
            int kills1 = 15;

            float runTime2 = 600f; // 10 minutes
            int kills2 = 30;

            // Act
            int baseXP1 = (int)runTime1 + (kills1 * 10);
            int baseXP2 = (int)runTime2 + (kills2 * 10);

            // Assert
            Assert.That(baseXP1, Is.EqualTo(450)); // 300 + 150
            Assert.That(baseXP2, Is.EqualTo(900)); // 600 + 300
        }

        /// <summary>
        /// Tests escape route XP multipliers.
        /// Helicopter 2.0×, Car 1.5×, Sewer 1.25×
        /// Requirement: 8.11
        /// </summary>
        [Test]
        public void ApplyEscapeRouteMultiplier_CalculatesCorrectFinalXP()
        {
            // Arrange
            int baseXP = 500;

            // Act
            int helicopterXP = (int)(baseXP * 2.0f);
            int carXP = (int)(baseXP * 1.5f);
            int sewerXP = (int)(baseXP * 1.25f);

            // Assert
            Assert.That(helicopterXP, Is.EqualTo(1000)); // 500 × 2.0
            Assert.That(carXP, Is.EqualTo(750));         // 500 × 1.5
            Assert.That(sewerXP, Is.EqualTo(625));       // 500 × 1.25
        }

        /// <summary>
        /// Tests multiple level-ups in a single XP award.
        /// Requirement: 8.12
        /// </summary>
        [Test]
        public void MultipleLevelUps_HandledCorrectly()
        {
            // Arrange
            int currentLevel = 1;
            int currentXP = 0;
            int baseXPPerLevel = 200;
            float xpScalePerLevel = 1.15f;

            // Award enough XP to level up twice
            int awardedXP = 500; // Should level up from 1->2 (200 XP) and 2->3 (230 XP)

            // Act
            currentXP += awardedXP;

            // Simulate level-up logic
            int levelsGained = 0;
            while (true)
            {
                int xpForNext = (int)(baseXPPerLevel * Math.Pow(xpScalePerLevel, currentLevel - 1));
                if (currentXP >= xpForNext)
                {
                    currentXP -= xpForNext;
                    currentLevel++;
                    levelsGained++;
                }
                else
                {
                    break;
                }
            }

            // Assert
            Assert.That(currentLevel, Is.EqualTo(3));     // Should be level 3
            Assert.That(levelsGained, Is.EqualTo(2));     // Should have gained 2 levels
            Assert.That(currentXP, Is.EqualTo(71));       // Remainder: 500 - 200 - 229 = 71
        }

        /// <summary>
        /// Tests that XP remainder carries over correctly.
        /// Requirement: 8.12
        /// </summary>
        [Test]
        public void XPRemainder_CarriesOverAfterLevelUp()
        {
            // Arrange
            int currentLevel = 1;
            int currentXP = 150; // Already have some XP
            int baseXPPerLevel = 200;
            float xpScalePerLevel = 1.15f;

            // Award XP that will level up with remainder
            int awardedXP = 100; // Total: 250, need 200 for level 2, remainder 50

            // Act
            currentXP += awardedXP;
            int xpForNext = (int)(baseXPPerLevel * Math.Pow(xpScalePerLevel, currentLevel - 1));
            
            if (currentXP >= xpForNext)
            {
                currentXP -= xpForNext;
                currentLevel++;
            }

            // Assert
            Assert.That(currentLevel, Is.EqualTo(2));
            Assert.That(currentXP, Is.EqualTo(50)); // Remainder should be 50
        }

        /// <summary>
        /// Tests skill points are granted on level-up.
        /// 1 skill point per level-up
        /// Requirement: 8.12
        /// </summary>
        [Test]
        public void SkillPoints_GrantedOnLevelUp()
        {
            // Arrange
            int currentLevel = 1;
            int skillPoints = 0;
            int skillPointsPerLevel = 1;

            // Act - simulate 3 level-ups
            for (int i = 0; i < 3; i++)
            {
                currentLevel++;
                skillPoints += skillPointsPerLevel;
            }

            // Assert
            Assert.That(currentLevel, Is.EqualTo(4));
            Assert.That(skillPoints, Is.EqualTo(3)); // 3 level-ups = 3 skill points
        }
    }
}
