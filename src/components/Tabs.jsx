const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {tabs.map((tab, index) => (
                <button key={tab.id} onClick={() => setActiveTab(index)} style={{
            padding: "10px",
            background: activeTab === index ? "#007bff" : "#ccc",
            color: activeTab === index ? "#fff" : "#000",
            border: "none",
            cursor: "pointer"
          }}> {tab.title} </button>
            ))}
        </div>
    )
}

export default Tabs;