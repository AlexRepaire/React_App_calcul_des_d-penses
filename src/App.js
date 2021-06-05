import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import expenses from "./components/Expenses/ExpensesData";
import './components/Expenses/Expenses.css';

function App() {
    const expensesBoucle = expenses.map((expense, index)=>{
        return (
            <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
        )
    });

  return (
    <div className="expenses">
        {expensesBoucle}
    </div>
  );
}

export default App;
