export const Team = () => {
    const theTeam = [
        {
            _id: 1,
            person: "zidane",
            name: "Zidane",
            position: "Leadership & management",
            connect: ["linkedin", "medium", "facebook"]
        },
        {
            _id: 2,
            person: "tonikroos",
            name: "Toni Kroos",
            position: "Product Developer",
            connect: ["linkedin", "medium"]
        },
        {
            _id: 3,
            person: "ikercasillas",
            name: "Iker Casillas",
            position: "Marketing Strategy",
            connect: ["medium"]
        },
        {
            _id: 4,
            person: "james",
            name: "James",
            position: "Product Designer",
            connect: ["medium", "nba", "facebook"]
        },
        {
            _id: 5,
            person: "christiano",
            name: "Cristiano",
            position: "Financial operations",
            connect: ["linkedin", "facebook"]
        }
    ]
    return (
        <div>
            
            <div className="center-flex team-div">
                <p className="team-heading">Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;)</p>
                <div className="person-flex">
                    {theTeam.map(({ _id, person, name, position, connect }) => (
                        <div key={_id} className="person-info">
                            <img src={`../../assets/${person}.jpg`} alt="person" className="product-img" />
                            <div className="center-flex information">
                                <span className="person-name">{name}</span>
                                <span>{position}</span>
                                <div className="social-connects">
                                    {connect.map((social) => (
                                        <img src={`../../assets/${social}.png`} alt="social-account" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="team-gratitude">and You! ;)</p>
            </div>
        </div>
    )
}