import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style/MeusPost.css'
import CardGroup from 'react-bootstrap/CardGroup'
import { right } from '@popperjs/core'

const MeusPost = () => {
  return (
    <div className="alinhar">
      <h2 className="title-postagens">Minhas Postagens</h2>
      <CardGroup>
        <Card className="card1" style={{ width: '20rem' }}>
          <Card.Img
            variant="top"
            src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png"
          />
          <Card.Body>
            <Card.Title>
              Localizador <a className="telefone">Telefone: (19)94849195</a>
            </Card.Title>
            <Card.Text className="lista">
              <ul>
                <li>Macho</li>
                <li>Pequeno</li>
                <li>Branco</li>
                <li>Cachorro</li>
                <li>Nenhuma</li>
                <li>Coleira vermelha</li>
              </ul>
            </Card.Text>
            <Button className="btn-danger" variant="danger">
              Excluir
            </Button>
            
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img
            variant="top"
            src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cores-de-coelho.jpg"
          />
          <Card.Body>
            <Card.Title>
              Dono <a className="telefone">Telefone: (19)94849195</a>
            </Card.Title>
            <Card.Text className="lista">
              <ul>
                <li>Fêmea</li>
                <li>Pequeno</li>
                <li>Marrom</li>
                <li>Coelho</li>
                <li>Machucado</li>
                <li>Nenhum</li>
              </ul>
            </Card.Text>
            <Button className="btn-danger" variant="danger">
              Excluir
            </Button>
            
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img
            variant="top"
            src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/calopsitas-felizes.jpg"
          />
          <Card.Body>
            <Card.Title>
              Dono <a className="telefone">Telefone: (19)94849195</a>
            </Card.Title>
            <Card.Text className="lista">
              <ul>
                <li>Macho</li>
                <li>Pequeno</li>
                <li>Amarelo</li>
                <li>Calopsita</li>
                <li>Outro</li>
                <li>Nenhum</li>
              </ul>
            </Card.Text>
            <Button className="btn-danger" variant="danger">
              Excluir
            </Button>
            
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default MeusPost
