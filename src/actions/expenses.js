import { v4 as uuidv4 } from "uuid";

/** 
 * ! Expense Action Generator  
 */

//Add_Expense Action Generator

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//Remove_Expense Action Generator

export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id,
});

//Edit_Expense Action Generator

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});