import React from 'react';
import styles from './tab1.module.css'; 

const TabvDefault = ({ label, onClick, isSelected, isDisabled }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div className={(isSelected ? styles.containervSelect : styles.containervDefault) + (isDisabled ? ` ${styles.tabDisabled}` : "")}
             onClick={() => !isDisabled && onClick(label)}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
             style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}>
            <div className={styles.tab}>
                <div className={(isSelected ? styles.tabLabelSelected : (hovered ? styles.tabLabelHover : styles.tabLabelvDefault)) + (isDisabled ? ` ${styles.tabLabelDisabled}` : "")}>
                    {label}
                </div>
            </div>
        </div>
    );
};

const TabDisabled = ({ label }) => {
    return (
        <div className={styles.containervDisabled}>
            <div className={styles.tab}>
                <div className={styles.tabLabelDisabled}>
                    {label}
                </div>
            </div>
        </div>
    );
};

const TabPrototypeVertical = () => {
    const [selectedTab, setSelectedTab] = React.useState(null);

    const handleTabClick = (label) => {
        setSelectedTab(label);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabsContainerVertical}>
                <TabvDefault label="Tab 1" onClick={handleTabClick} isSelected={selectedTab === "Tab 1"} />
                <TabvDefault label="Tab 2" onClick={handleTabClick} isSelected={selectedTab === "Tab 2"} />
                <TabvDefault label="Tab 3" onClick={handleTabClick} isSelected={selectedTab === "Tab 3"} />
                <TabDisabled label="Tab 4" />
            </div>
        </div>
    );
};

export default TabPrototypeVertical;