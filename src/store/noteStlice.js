import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [
    {
      note_id: "note1",
      video_id: "v001",
      user_id: "user001",
      title: "covered basic SQL syntax",
      content: "cover the basic concept such as select, create, where etc.",
      createdAt: "2024-11-16T10:30:00.000Z",
      timeStamp: 120,
    },
    {
      note_id: "note2",
      video_id: "v002",
      user_id: "user002",
      title: "covered advanced SQL joins",
      content: "Details about inner, outer, and self joins",
      createdAt: "2024-11-16T10:32:00.000Z",
      timeStamp: 300,
    },
  ],

  reducers: {
    createNote: (state, action) => {
      const newNote = {
        ...action.payload,
        note_id: `note${state.notes.length + 1}`, // Generate a new unique note_id
        createdAt: new Date().toISOString(), // Add current timestamp
      };
      state.notes.push(newNote); // Add the new note to the array
    },
  },
});

export const { createNote } = noteSlice.actions;
export default noteSlice.reducer;
