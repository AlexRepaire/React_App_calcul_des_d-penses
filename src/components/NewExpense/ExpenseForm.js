import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [entrerTitre, setEntrerTitre] = useState("");
    const [entrerAmount, setEntrerAmount] = useState("");
    const [entrerDate, setEntrerDate] = useState("");

    /*const [userInput, setUserInput] = useState({
       entrerTitre:'',
       entrerMontant:'',
       entrerDate:''
    });*/

    const titleChangeHandler = e =>{
        setEntrerTitre(e.target.value);
        /*setUserInput({
            ...userInput,
            entrerTitre:e.target.value,
        });
        setUserInput((prevState)=>{
            return {...prevState,entrerTitre: e.target.value};
        });*/
    };

    const amountChangeHandler = e =>{
        setEntrerAmount(e.target.value);
        /*setUserInput({
            ...userInput,
            entrerMontant:e.target.value,
        });
        setUserInput((prevState)=>{
            return {...prevState, entrerMontant:e.target.value};
        })*/
    };

    const dateChangeHandler = e =>{
        setEntrerDate(e.target.value);
        /*setUserInput({
            ...userInput,
            entrerDate:e.target.value,
        });
        setUserInput((prevState)=>{
            return {...prevState, entrerDate:e.target.value};
        })/*/
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData={
          title: entrerTitre,
          amount:+entrerAmount,
          date:new Date(entrerDate)
        };

        props.onSaveExpenseData(expenseData);
        setEntrerTitre('');
        setEntrerAmount('');
        setEntrerDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titre</label>
                    <input type="text" value={entrerTitre} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Montant</label>
                    <input type="number" min="0.01" step="0.01" value={entrerAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={entrerDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Annuler</button>
                <button type="submit">Ajout dépense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;