import { useState } from "react";
import {
	FlatList,
	Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function Journal() {
	const [entries, setEntries] = useState([]); 
	const [modalVisible, setMOdalVisible]= useState(false); 
	const [journalEntryTitle, setJournalEntryTitle] = useState(""); 
	const [journalEntryText, setJournalEntryText] = useState("");
	
	const addJournalEntry = () => {
		if(journalEntryTitle.trim() === "") return; 
		const newEntry = {
			id: Date.now().toString(),
			title: journalEntryTitle, 
			text: journalEntryText, 
			date: new Date().toLocaleDateString()
		}

		setEntries([newEntry, ...entries]); // add new entry to our journal entries

		// clear the input data
		setJournalEntryTitle(""); 
		setJournalEntryText(""); 
		setMOdalVisible(false); 
	}
	return (
    	<View style={styles.container}>
			<FlatList
				data={entries}
				contentContainerStyle={entries.length === 0 && styles.emptyList}
				ListEmptyComponent={
					<View style={styles.empty}>
						<Text style={styles.emptyText}>No Entries Yet</Text>
						<Text style={styles.emptySubtext}>Tap + to add your first entry</Text>
					</View>
				}
				renderItem={({item}) => (
					<View style={styles.card}>
						<Text style ={styles.cardTitle}>{item.title}</Text>
						<Text style={styles.cardText}>{item.text}</Text>
						<Text style={styles.cardDate}>{item.date}</Text>
					</View>
				)}/>
			<TouchableOpacity
				style={styles.fab}
				onPress={() => setMOdalVisible(true)}>
					<Text style={styles.fabText}>+</Text>
			</TouchableOpacity>
			<Modal
				visible={modalVisible}
				transparent={true}>
				<View style ={styles.modalOverlay}>
					<View style={styles.modalContent}>
						<Text>Add New Journal Entry</Text>
						<TextInput
							placeholder="Title"
							style = {styles.input}
							value={journalEntryTitle}
							onChangeText={setJournalEntryTitle}/>
						<TextInput
							placeholder="Text"
							style = {styles.input}
							value={journalEntryText}
							onChangeText={setJournalEntryText}
							multiline={true}
							numberOfLines={4}/>
						<TouchableOpacity
							style={styles.saveButton}
							onPress={() => addJournalEntry()}>
							<Text style={styles.saveButtonText}>Save Entry</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.cancelButton}
							onPress={() => setMOdalVisible(false)}>
							<Text style={styles.cancelButtonText}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
    	</View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
	padding: 8
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
  },
  cardText: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 6,
  },
  cardDate: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 10,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  fabText: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: -2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#1e293b",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  textArea: {
    height: 120,
  },
  saveButton: {
    backgroundColor: "#3b82f6",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    padding: 16,
    alignItems: "center",
    marginTop: 4,
  },
  cancelButtonText: {
    color: "#64748b",
    fontSize: 16,
  },
  empty: {
    alignItems: "center",
    marginTop: 100,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#94a3b8",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#cbd5e1",
    marginTop: 8,
  },
  emptyList: {
    flex: 1,
    padding: 16,
  },
});