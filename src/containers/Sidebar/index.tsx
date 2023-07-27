import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Title"
import Avatar from "../../components/avatar"

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Victor Freire</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>oliveira-victor</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)


export default Sidebar
