import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <div className="d-flex">
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="lalala4.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni tenetur accusamus dolorum facere quidem recusandae deleniti, nam, error aliquam laudantium odio reiciendis in architecto totam dignissimos corrupti animi odit.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="lalala4.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quis incidunt perferendis ratione delectus cupiditate! Praesentium dolorem nemo nostrum nobis error dolor quam at perferendis eum modi, saepe repellat tenetur.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="lalala4.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed dolorem tempore et, ipsa odit cumque dolore fuga mollitia! Dolorum consequatur quod modi, minima delectus quis cumque sed accusantium doloribus?
        </Card.Text>
      </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="lalala4.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ratione amet delectus labore cupiditate, laborum consequuntur provident quidem excepturi error vitae quibusdam minus mollitia ab, nisi esse aliquam voluptatibus similique!
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;