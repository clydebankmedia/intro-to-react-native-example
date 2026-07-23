import {
    StyleSheet,
    View
} from "react-native";

export default function Journal() {
	// TODO: ADD STATE VARIABLES

	// TODO: ADD FUNCTION TO ADD ENTRIES TO THE STATE

	return (
    	<View style={styles.container}>
			{/*TODO: ADD JSX TO BUILD THE UI FOR A SIMPLE JOURNALING APP*/}
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