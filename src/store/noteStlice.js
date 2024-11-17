import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [], // State is a list of notes

  reducers: {
    // Add a new empty note
    addEmptyNote: (state,action) => {
      const {video_id} = action.payload;
      const newNote = {
        note_id: `note${state.length + 1}`, // Generate unique id
        video_id: video_id || "",
        user_id: "",
        title: "",
        content: "",
        createdAt: new Date().toISOString(),
        timeStamp: 0,
        isEditing: true, // Automatically enter edit mode for a new note
      };
      state.unshift(newNote);
    },

    // Update fields of an existing note
    updateNote: (state, action) => {
      const { note_id, ...updatedFields } = action.payload;
      const note = state.find((n) => n.note_id === note_id);
      if (note) {
        Object.assign(note, updatedFields);
      }
    },

    // Delete a note
    deleteNote: (state, action) => {
      return state.filter((note) => note.note_id !== action.payload.note_id);
    },

    // Toggle edit mode for a note
    toggleEditMode: (state, action) => {
      const note = state.find((n) => n.note_id === action.payload.note_id);
      if (note) {
        note.isEditing = !note.isEditing;
      }
    },
  },
});

export const { addEmptyNote, updateNote, deleteNote, toggleEditMode } =
  noteSlice.actions;
export default noteSlice.reducer;
