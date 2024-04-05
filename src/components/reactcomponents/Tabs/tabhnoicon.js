import React from 'react';
import styles from './tab1.module.css'; 

const TabDefault = ({ label, onClick, isSelected, children }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div className={isSelected ? styles.containerSelect : (hovered ? styles.containerHover : styles.containerDefault)}
             onClick={() => onClick(label)}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <div className={styles.tab}>
                <div className={isSelected ? styles.tabLabelSelected : (hovered ? styles.tabLabelHover : styles.tabLabelDefault)}>
                    {label}
                </div>
            </div>
            {isSelected && <div className={styles.separator}></div>}
            {isSelected && <div className={styles.tabContent}>{children}</div>}
        </div>
    );
};

const TabDisabled = () => {
    return (
        <div className={styles.containerDisabled}>
            <div className={styles.tab}>
                <div className={styles.tabLabelDisabled}>Tab 4</div>
            </div>
        </div>
    );
};

const TabPrototype = () => {
    const [selectedTab, setSelectedTab] = React.useState(null);

    const handleTabClick = (label) => {
        setSelectedTab(label);
    };

    return (
        <div className={styles.tabsContainer}>
            <TabDefault label="Tab 1" onClick={handleTabClick} isSelected={selectedTab === "Tab 1"}>
            </TabDefault>
            <TabDefault label="Tab 2" onClick={handleTabClick} isSelected={selectedTab === "Tab 2"}>
            </TabDefault>
            <TabDefault label="Tab 3" onClick={handleTabClick} isSelected={selectedTab === "Tab 3"}>
            </TabDefault>
            <TabDisabled />
        </div>
    );
};

export default TabPrototype;
