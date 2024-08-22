import { HistoryContainer, HistoryList, Status } from "./styles"

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>15 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor='green'>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>15 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor='yellow'>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>15 minutos</td>
              <td>há 2 dias</td>
              <td>
                <Status statusColor="red">Interrompído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
