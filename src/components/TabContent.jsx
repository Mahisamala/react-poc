const TabContent = ({ tab }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
        </div>
    );
};

export default TabContent;