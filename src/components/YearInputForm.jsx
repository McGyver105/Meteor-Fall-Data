import React from 'react';

const YearInputForm = ({handleSubmit, handleChange, state}) => {
    return (
        <form onSubmit={handleSubmit}>
                        <label>
                            From
                            <input
                                type="number"
                                minLength="0"
                                maxLength="2020"
                                value={state.years.start}
                                name="start"
                                onChange={handleChange}
                            ></input>
                        </label>
                        <label>
                            Until
                            <input
                                type="number"
                                minLength="0"
                                maxLength="2020"
                                value={state.years.finish}
                                name="finish"
                                onChange={handleChange}
                            ></input>
                        </label>
                        <button>Submit</button>
                    </form>
    );
};

export default YearInputForm;