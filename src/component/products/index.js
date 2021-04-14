import React from 'react'
import {Row, Col} from 'antd'
import {Fondo1, Fondo2, Fondo3, Fondo4, Letrero, Letrero2, Letrero3, Letrero4, Letra} from './styles'

export const Products = () => {
  return(
    <div style={{background: '#84D1E3'}}>
      <Row>
        <Col
          xs={{ offset: 1, span: 10 }} 
          sm={{ offset: 1, span: 10  }}
          md={{ offset: 1, span: 10}}
          lg={{ offset: 2, span: 4}}
          xl={{ offset: 2, span: 4}}
          xxl={{ offset: 2,span: 4 }}
        >
          <Fondo1>
            <Letrero>
              <Letra>
                Para un hijo de la mezcla,😎 tres sabores rifados: Vicky Chamoy, Vicky Mango y Vicky Chelada.
              </Letra>
            </Letrero>
          </Fondo1>
        </Col>
        <Col
          xs={{ offset: 2, span: 10 }} 
          sm={{ offset: 2, span: 10 }}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 1, span: 4 }}
          xl={{ offset: 1, span: 4 }}
          xxl={{ offset: 1,span: 4 }}
        >
          <Fondo2>
            <Letrero2>
              <Letra>
                ¡Pásele! ¡Pásele! Ya llegó la ¡Vicky Chamoy! 🍺🔥
              </Letra>
            </Letrero2>
          </Fondo2>
        </Col>
        <Col
          xs={{ offset: 1, span: 10 }}
          sm={{ offset: 1, span: 10  }}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 1, span: 4 }}
          xl={{ offset: 1, span: 4 }}
          xxl={{ offset: 2,span: 4 }}
        >
          <Fondo3>
            <Letrero3>
              <Letra>     
                Le venimos manejando lo que viene siendo la sabrosa ¡Vicky Mango! ⚡
              </Letra>
            </Letrero3>
          </Fondo3>
        </Col>
        <Col
          xs={{ offset: 2, span: 10 }}
          sm={{ offset: 2, span: 10 }}
          md={{ offset: 1, span: 10 }}
          lg={{ offset: 1, span: 4 }}
          xl={{ offset: 1, span: 4 }}
          xxl={{ offset: 1,span: 4 }}
        >
          <Fondo4>
            <Letrero4>
              <Letra>
                Del barrio pa'l mundo, le traemos la ¡Vicky Chelada!💥👌🏽
              </Letra>
            </Letrero4>
          </Fondo4>
        </Col>
      </Row>
    </div>
  )
}