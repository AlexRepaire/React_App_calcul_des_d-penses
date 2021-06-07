import React, {useState} from "react";

import './components/Expenses/Expenses.css';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpensesData from "./components/Expenses/ExpensesData";


const App = () => {

    const [expenses, setExpenses] = useState(ExpensesData);

    const addExpensehandler = expense =>{
        setExpenses((prevExpenses) =>{
            return [expense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpensehandler}/>
            <Expenses items={expenses}/>
        </div>

);
}

export default App;
