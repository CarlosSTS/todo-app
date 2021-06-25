
import {Alert} from 'react-native'

export default function deleteTodos(todo, deleteTodo) {

Alert.alert(
  "Remover todos os to-dos ?",
  `o total é: ${todo.length}`,
  [
    {
      text: "Não",
      style: "Não",
    },
    {
      text: "Sim 😢",
      onPress: () => {
        try {
          deleteTodo();
        } catch {
          Alert.alert("Aviso", "Não foi possivel deletar");
        }
      },
    },
  ],
  { cancelable: false }
)
}