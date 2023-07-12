import { useState } from "react";
const Home = () => {

    const [type,setType] = useState('Single elimination')
    const [name,setName] = useState('')
    const [size,setSize] = useState(2)
    const [teamName, setTeamName] = useState([])

    const handleTeamSizeChange = (e) => {
        const size = parseInt(e.target.value);
        setSize(size);
        setTeamName(Array(size).fill(""));
    }

    const handleTeamNameChange = (e,index) => {
        const newTeamName = [...teamName];
        newTeamName[index] = e.target.value;
        setTeamName(newTeamName);
    }

    const handleCreate = () => {

    }
    return (
        <div className="create">
            <h2>Create tournament bracket</h2>
            <form onSubmit={handleCreate}>
                <label>Select a type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Single elimination">Single elimination</option>
                    <option value="Double elimination">Double elimination</option>
                </select>
                <label>Tournament Name: </label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label>How many teams</label>
                <select value={size} onChange={handleTeamSizeChange}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                </select>

                <label>Enter team names</label>
                {teamName.map((name, index)=> (
                    <input 
                    key={index}
                    type="text"
                    value={name}
                    onChange={(e) => handleTeamNameChange(e, index)}
                    placeholder={`Enter team ${index + 1} name`}
                    />
                ))}

            </form>
        </div>
    );
}
 
export default Home;