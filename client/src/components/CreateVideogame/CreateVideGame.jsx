import React from 'react';

const CreateVideoGame = () => {
    
    return (
        <div>
             <form action="">
                <label >Name: </label>
                {/* <input type="text" name="name" value={formData.name} onChange={handleChange}/> */}
                <label>Image: </label>
                {/* <input type="text" name="region" value={formData.region}onChange={handleChange}/>
                <label>Description: </label>
                <input type="text" name="words" value={formData.words} onChange={handleChange}/> */}
                <button type="submit">Create</button>
             </form>
                
        </div>
    );
};

export default CreateVideoGame;