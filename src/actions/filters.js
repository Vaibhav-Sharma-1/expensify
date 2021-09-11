
/** 
 * ! Filters Action Generator  
 */

//Set_Text_Filter Action Generator

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//Sort_By_Amount Action Generator

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//Sort_By_Date Action Generator

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

//Set_Start_Date Action Generator

export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

//Set_End_Date Action Generator

export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
