import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const PlayerCard = (props) => (
    <Card>
        <Card.Content header={props.player.name} />
        <Card.Content description={props.player.country} />
        <Card.Content extra>
            <Icon name='search' />{props.player.searches} Searches
    </Card.Content>
    </Card>
)

export default PlayerCard