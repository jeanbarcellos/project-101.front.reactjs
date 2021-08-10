import React from 'react'
import { Button, Typography } from '@material-ui/core'

const DemoPage = () => {
  return (
    <div className=''>
      <Typography variant='h3' component='h1' gutterBottom>
        Olá mundo!
      </Typography>

      <Typography variante='p' component='p' gutterBottom>
        Demo
      </Typography>

      <Button variant='contained' color='primary' className='mb-16'>
        Clique aqui
      </Button>

      <div className='mb-16'>
        <Button variant='contained' className='mr-4'>
          Default
        </Button>
        <Button variant='contained' color='primary' className='mr-4'>
          Primary
        </Button>
        <Button variant='contained' color='secondary' className='mr-4'>
          Secondary
        </Button>
        <Button variant='contained' disabled className='mr-4'>
          Disabled
        </Button>
        <Button variant='contained' color='primary' href='#contained-buttons'>
          Link
        </Button>
      </div>

      <div className='mb-32 text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum efficitur accumsan. Phasellus convallis
        laoreet congue. Nam commodo enim a ultrices porttitor. Suspendisse eget tellus urna. Proin lobortis et odio non
        venenatis. Pellentesque ac auctor purus, eget suscipit nibh. Phasellus porttitor, nunc eu ultrices dapibus,
        magna nisi convallis sem, vel dictum lacus est accumsan est. Fusce tellus nibh, varius eu tellus ac, consequat
        rutrum turpis. Suspendisse faucibus magna id interdum cursus. Nam pretium aliquam metus nec lobortis. Duis ac
        metus interdum, cursus nisl a, egestas lorem.
      </div>
      <div className='mb-32 text-justify font-bold'>
        Morbi non velit dignissim purus gravida varius maximus a justo. Fusce metus augue, sagittis nec suscipit sed,
        maximus vitae elit. Etiam erat justo, fermentum in semper eget, euismod in orci. Duis eget egestas nulla. Mauris
        accumsan enim in tristique fringilla. Nullam quis ultricies ligula. Ut commodo mauris eget sapien placerat, eu
        posuere odio imperdiet. Fusce hendrerit at turpis sit amet aliquet. Sed nec turpis eu elit placerat suscipit.
        Integer luctus pellentesque sem sed malesuada. Duis tincidunt orci erat, eu laoreet libero suscipit nec.
        Phasellus eget nisl ante.
      </div>
      <div className='flex'>
        <div className='mb-32 w-1/2 pr-12 text-justify'>
          Mauris vel maximus est. Cras lacinia dui sit amet purus efficitur tempor. Fusce aliquam libero ac nisl
          ultrices imperdiet. Nulla tellus sapien, congue et ornare a, tristique non orci. Fusce sed purus turpis.
          Vestibulum at porttitor magna, sit amet luctus nisi. Integer a sapien libero. Suspendisse semper aliquam diam,
          eu ullamcorper sapien bibendum ut. Sed a ligula vitae urna sollicitudin ornare non sit amet justo.
        </div>
        <div className='mb-32 w-1/2 pl-12 text-justify'>
          Duis commodo suscipit ligula in euismod. Integer feugiat accumsan purus, ac consectetur orci. Etiam dictum a
          sem id ultrices. Vivamus a tristique nibh. Mauris at orci ultrices felis pellentesque dictum id sit amet sem.
        </div>
      </div>
    </div>
  )
}

export default DemoPage