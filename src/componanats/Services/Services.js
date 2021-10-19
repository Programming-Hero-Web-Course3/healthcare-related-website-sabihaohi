import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            id: 1,
            img: "https://images.everydayhealth.com/images/ehfc-5-minute-stress-relief-and-calming-yoga-flow-1440x810.jpg",
            title: "BodyCombat",
            description: "BodyCombat is the empowering cardio workout where you are totally unleashed. This fiercely energetic program is inspired by mixed martial  ",
            price: "$10",
            duration: "06pm - 07pm",
            rules: "Mon, Wed, Fri"
        },
        {
            id: 2,
            img: "http://fitness.skat.tf/wp-content/uploads/sites/8/2014/04/yoga-small-770x400.jpg",
            title: "Yoga Fitness",
            description: "Whether you’re a regular yoga guru or are just starting out with the basics, Fitness First yoga classes are a great way to unwind and develop you.",
            price: "$10",
            duration: "08pm - 09pm",
            rules: "Mon, Wed, Fri"
        },
        {
            id: 3,
            img: "http://fitness.skat.tf/wp-content/uploads/sites/8/2014/04/photodune-6569517-aerobics-girls-s-770x400.jpg",
            title: "Zumba Fitness",
            description: "This is the activity that everyone’s been talking about. Fun, hypnotic and easy-to-follow, Zumba classes are the fun way to get your body moving,",
            price: "$20",
            duration: "06pm - 07pm",
            rules: "Sat, Sun, Tus"
        },
        {
            id: 4,
            img: "http://fitness.skat.tf/wp-content/uploads/sites/8/2014/04/photodune-3709351-crossfit-dip-ring-group-workout-dipping-in-a-row-s-770x400.jpg",
            title: "BodyAttack",
            description: "BodyAttack is the sports-inspired cardio workout for building strength and stamina. This high-energy interval training class combines athletic aerobic ",
            price: "$20",
            duration: "07pm - 08pm",
            rules: "Mon, Wed, Fri"
        },
        {
            id: 5,
            img: "https://media1.popsugar-assets.com/files/thumbor/Cdhy1vO9ILY8U_l5FlotWVvmhRE/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/06/069/n/1922729/2c685e535e3cb1fca3adf7.84473690_/i/best-at-home-pilates-abs-moves.jpg",
            title: "Pilates teaches",
            description: "Pilates teaches a unique method of body control and conditioning – stretching and strengthening the muscles, while improving flexibility and balance.",
            price: "$18",
            duration: "08pm - 09pm",
            rules: "Mon, Wed, Fri"
        },
        {
            id: 6,
            img: "http://wp3.commonsupport.com/newwp/fitnesscare/wp-content/uploads/2016/12/1-1.jpg",
            title: "Body Building",
            description: "Fitness testing, Diet Plan,Weekly motivation and accountability,Ongoing nutrition support,Training Calendars,Free Wifi & Community Support ",
            price: "$30",
            duration: "07pm - 08pm",
            rules: "Sat, Sun, Tus"
        },
        {
            id: 7,
            img: "https://dreevex.esmet.me/wp-content/uploads/sites/18/2020/03/blog-img-2.jpg",
            title: "Fat Loss",
            description: "Working out in your own space doesn’t just save time, it’s also easier to fit in if you find yourself with a spare five minutes. Remember – a few minutes",
            price: "$52",
            duration: "08pm - 09pm",
            rules: "Sat, Sun, Tus"
        },
        {
            id: 8,
            img: "http://wp3.commonsupport.com/newwp/fitnesscare/wp-content/uploads/2016/12/4-1.jpg",
            title: "Weight Lifting",
            description: "Weight training is a common type of strength training for developing the strength and size of skeletal muscles. It utilizes the force of gravity",
            price: "$35",
            duration: "06pm - 07pm",
            rules: "Mon, Wed, Fri"
        },
        {
            id: 9,
            img: "http://wp3.commonsupport.com/newwp/fitnesscare/wp-content/uploads/2016/12/5-1.jpg",
            title: "Boxing Classes",
            description: "Boxing is a combat sport in which two people, usually wearing protective gloves and other protective equipment such as hand wraps",
            price: "$40",
            duration: "06pm - 07pm",
            rules: "Mon, Wed, Fri"
        }
    ]
    const { serviceId } = useParams();

    return (
        <div>
            <Container className="all-services">
                <Row className="row gy-4">
                    {
                        services.filter(service => service.id === parseInt(serviceId)).map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;