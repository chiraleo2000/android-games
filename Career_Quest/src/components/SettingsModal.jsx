import { motion } from 'framer-motion';
import { X, Volume2, Sun, Moon, Globe, Crown, Lock, Download, Upload, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { exportUserData, importUserData, downloadDataAsFile, readDataFromFile, clearAllData } from '../utils/dataExportImport.js';
import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL, SUPPORT_EMAIL } from '../config/legal.js';
import './SettingsModal.css';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
];

function SettingsModal({
    onClose,
    musicEnabled,
    onMusicToggle,
    volume,
    onVolumeChange,
    language,
    onLanguageChange,
    isPremium,
    onTogglePremium
}) {
    const { theme, setTheme } = useTheme();
    const [exportStatus, setExportStatus] = useState('');
    const [importStatus, setImportStatus] = useState('');
    const fileInputRef = useRef(null);

    const handleExport = async () => {
        setExportStatus('Exporting...');
        const result = await exportUserData();
        
        if (result.success) {
            const downloadResult = downloadDataAsFile(result.data);
            if (downloadResult.success) {
                setExportStatus(`✅ Exported: ${downloadResult.filename}`);
                setTimeout(() => setExportStatus(''), 3000);
            } else {
                setExportStatus(`❌ Export failed: ${downloadResult.error}`);
            }
        } else {
            setExportStatus(`❌ Export failed: ${result.error}`);
        }
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileSelect = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setImportStatus('Importing...');
        
        try {
            const data = await readDataFromFile(file);
            const result = await importUserData(data);
            
            if (result.success) {
                const message = result.migratedFrom 
                    ? `✅ Imported and migrated from v${result.migratedFrom}`
                    : '✅ Data imported successfully';
                setImportStatus(message);
                setTimeout(() => {
                    setImportStatus('');
                    window.location.reload(); // Reload to apply imported data
                }, 2000);
            } else {
                setImportStatus(`❌ Import failed: ${result.error}`);
            }
        } catch (error) {
            setImportStatus(`❌ Import failed: ${error.message}`);
        }
        
        // Reset file input
        event.target.value = '';
    };

    const handleClearData = async () => {
        if (!window.confirm('Are you sure you want to clear all saved data? This cannot be undone.')) {
            return;
        }

        const result = await clearAllData();
        if (result.success) {
            alert('All data cleared successfully');
            window.location.reload();
        } else {
            alert(`Failed to clear data: ${result.error}`);
        }
    };

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="settings-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="modal-header">
                    <h2 className="modal-title">Settings</h2>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                {/* Theme */}
                <div className="settings-section">
                    <label className="settings-label">
                        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                        Theme
                    </label>
                    <div className="theme-toggle">
                        <button
                            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                            onClick={() => setTheme('light')}
                        >
                            <Sun size={16} />
                            Light
                        </button>
                        <button
                            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                            onClick={() => setTheme('dark')}
                        >
                            <Moon size={16} />
                            Dark
                        </button>
                    </div>
                </div>

                {/* Music */}
                <div className="settings-section">
                    <label className="settings-label">
                        <Volume2 size={20} />
                        Background Music
                    </label>
                    <div className="music-controls">
                        <button
                            className={`toggle-btn ${musicEnabled ? 'active' : ''}`}
                            onClick={onMusicToggle}
                        >
                            {musicEnabled ? 'On' : 'Off'}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                            className="volume-slider"
                            disabled={!musicEnabled}
                        />
                    </div>
                </div>

                {/* Language */}
                <div className="settings-section">
                    <label className="settings-label">
                        <Globe size={20} />
                        Language
                    </label>
                    <div className="language-grid">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                                onClick={() => onLanguageChange(lang.code)}
                            >
                                <span className="lang-flag">{lang.flag}</span>
                                <span className="lang-name">{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Premium Access */}
                <div className="settings-section">
                    <label className="settings-label">
                        <Crown size={20} />
                        {language === 'th' ? 'เวอร์ชันพรีเมียม' : language === 'zh' ? '高级版本' : 'Premium Version'}
                    </label>
                    <div className="premium-status-container">
                        <div className={`premium-status-badge ${isPremium ? 'premium-active' : 'premium-inactive'}`}>
                            {isPremium ? (
                                <><Crown size={16} /> {language === 'th' ? 'เปิดใช้งาน' : language === 'zh' ? '已激活' : 'Activated'}</>
                            ) : (
                                <><Lock size={16} /> {language === 'th' ? 'ฟรี' : language === 'zh' ? '免费版' : 'Free Version'}</>
                            )}
                        </div>
                        <button
                            className={`toggle-btn ${isPremium ? 'active' : ''}`}
                            onClick={onTogglePremium}
                        >
                            {isPremium
                                ? (language === 'th' ? 'ปิด' : language === 'zh' ? '关闭' : 'Deactivate')
                                : (language === 'th' ? 'ซื้อ' : language === 'zh' ? '购买' : 'Upgrade')
                            }
                        </button>
                    </div>
                    <p className="premium-info">
                        {isPremium
                            ? (language === 'th' ? '🎉 คุณเข้าถึงอาชีพพรีเมียมทั้งหมด 24 อาชีพ!'
                                : language === 'zh' ? '🎉 您可以访问所有24个高级职业！'
                                : '🎉 You have access to all 24 premium careers!')
                            : (language === 'th' ? '🔒 อัปเกรดเพื่อปลดล็อคอาชีพพรีเมียม 24 อาชีพ'
                                : language === 'zh' ? '🔒 升级以解锁24个高级职业'
                                : '🔒 Upgrade to unlock 24 premium careers across all categories')
                        }
                    </p>
                </div>

                {/* Data Management */}
                <div className="settings-section">
                    <label className="settings-label">
                        <Download size={20} />
                        {language === 'th' ? 'จัดการข้อมูล' : language === 'zh' ? '数据管理' : 'Data Management'}
                    </label>
                    <div className="data-management-controls">
                        <button className="data-btn export-btn" onClick={handleExport}>
                            <Download size={16} />
                            {language === 'th' ? 'ส่งออกข้อมูล' : language === 'zh' ? '导出数据' : 'Export Data'}
                        </button>
                        <button className="data-btn import-btn" onClick={handleImportClick}>
                            <Upload size={16} />
                            {language === 'th' ? 'นำเข้าข้อมูล' : language === 'zh' ? '导入数据' : 'Import Data'}
                        </button>
                        <button className="data-btn clear-btn" onClick={handleClearData}>
                            <Trash2 size={16} />
                            {language === 'th' ? 'ล้างข้อมูล' : language === 'zh' ? '清除数据' : 'Clear Data'}
                        </button>
                    </div>
                    {exportStatus && <p className="data-status">{exportStatus}</p>}
                    {importStatus && <p className="data-status">{importStatus}</p>}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".json"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />
                </div>

                <div className="settings-section">
                    <label className="settings-label">
                        {language === 'th' ? 'ความเป็นส่วนตัว' : language === 'zh' ? '隐私' : 'Privacy & Legal'}
                    </label>
                    <div className="data-management-controls">
                        <a className="data-btn" data-testid="privacy-policy-link" href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
                            {language === 'th' ? 'นโยบายความเป็นส่วนตัว' : language === 'zh' ? '隐私政策' : 'Privacy Policy'}
                        </a>
                        <a className="data-btn" href={TERMS_OF_SERVICE_URL} target="_blank" rel="noreferrer">
                            {language === 'th' ? 'ข้อกำหนดการใช้งาน' : language === 'zh' ? '使用条款' : 'Terms of Service'}
                        </a>
                        <a className="data-btn" href={`mailto:${SUPPORT_EMAIL}`}>
                            {language === 'th' ? 'ติดต่อฝ่ายสนับสนุน' : language === 'zh' ? '联系支持' : 'Contact support'}
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

SettingsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    musicEnabled: PropTypes.bool.isRequired,
    onMusicToggle: PropTypes.func.isRequired,
    volume: PropTypes.number.isRequired,
    onVolumeChange: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    isPremium: PropTypes.bool.isRequired,
    onTogglePremium: PropTypes.func.isRequired
};

export default SettingsModal;
