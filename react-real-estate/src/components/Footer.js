import {  Container, Row, Col} from 'reactstrap';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <h5>Quick Links</h5>
                    <a
                        className='p'
                        href='#'
                    >
                        Search for Homes 
                    </a>{' '}
                    <a
                        className='p'
                        href='#'
                    >
                        Sellers 
                    </a>{' '}
                    <a
                        className='p'
                        href='#'
                    >
                        About
                    </a>{' '}
                    <a
                        className='p'
                        href='#'
                    >
                        Featured Properties 
                    </a>{' '}
                    <a
                        className='p'
                        href='#'
                    >
                        Area Info 
                    </a>{' '}
                    
                    </Col>

                    <Col xs='6' sm='3' className='text-center'>
                    <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='https://www.linkedin.com/'
                        >
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-snapchat'
                            href='https://www.snapchat.com/'
                        >
                            <i class="fa fa-snapchat" aria-hidden="true"></i>
                        </a>
                    </Col>

                    <Col sm='4' className='text-center'>
                    <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> genericrealestate@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer; 

