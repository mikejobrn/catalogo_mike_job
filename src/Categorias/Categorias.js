export default function Categorias() {
    return <div>
        <form>
            <div>
                <label for="genero">Nome do gênero</label>
                <br/>
                <input id="genero" />
            </div>
            <button type="submit">Cadastrar</button>
        </form>

        <table>
            <tr>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
            <tr>
                <td>Fantasia</td>
                <td>
                    Atualizar | Excluir
                </td>
            </tr>
            <tr>
                <td>Ação</td>
                <td>
                    Atualizar | Excluir
                </td>
            </tr>
            <tr>
                <td>RPG</td>
                <td>
                    Atualizar | Excluir
                </td>
            </tr>
        </table>
    </div>;
}