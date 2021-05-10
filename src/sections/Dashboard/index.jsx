import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text'
import Card from '@htv/ui-kit/components/Card'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/Navigation/NavigationBar';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactComponent as Logo } from '@htv/ui-kit/assets/logo.svg';
import Status from './Status';
import {
    linesContainer,
    logoContainer,
    logo,
    dashboardContainer,
    npmText,
    welcomeText,
    logoutText,
    exploreText,
    grid,
    factionContainer,
    space,
    factionIcon,
    factionText,
    questionMarks,
    faqText
} from './Dashboard.module.scss';

function Dashboard() {
    return (
        <Section backgroundColor='charcoal'>
            <NavigationBar
              backgroundColor='charcoal'
              as='nav'
              before={
                    <Link
                      className={logoContainer}
                      title='Link to homepage'
                      to='/'
                      >
                        <Logo className={logo} width='32' />
                    </Link>
                }>
            </NavigationBar>
            <div className={linesContainer}></div>
            <div className={dashboardContainer}>
                <Text className={npmText} lineHeight='relaxed' align='start' type='body1'>
                    $ npm start challenge
                </Text>
                <Text className={welcomeText} lineHeight='relaxed' align='start' type='heading2'>
                    Welcome Back, xxx
                    <Text className={logoutText} lineHeight='relaxed' align='start' type='body1'>
                        &lt; Log Out
                    </Text>
                </Text>
                <Status />
                <Text className={exploreText} lineHeight='relaxed' align='start' type='body1'>
                    Explore
                </Text>
                <div className={grid}>
                    <Card>
                        <div className={factionContainer}>
                            <div>
                                <div>
                                    <StaticImage className={factionIcon} src='../../images/faction-icons/factions-health.png'></StaticImage>
                                    <StaticImage className={factionIcon} src='../../images/faction-icons/factions-nature.png'></StaticImage>
                                </div>
                                <div className={space}>
                                    <StaticImage className={factionIcon} src='../../images/faction-icons/factions-technology.png'></StaticImage>
                                    <StaticImage className={factionIcon} src='../../images/faction-icons/factions-discovery.png'></StaticImage>
                                </div>
                            </div>
                            <Text className={factionText} lineHeight='normal' type='body1'>
                                The Factions of <strong>HTV5</strong>
                            </Text>
                        </div>
                    </Card>
                    <Card>
                        <Text className={questionMarks} lineHeight='normal' align='start' type='heading1'>
                            ??? 
                            <Text className={faqText} lineHeight='normal' align='start' type='body1'>
                                FAQs
                            </Text>
                        </Text>
                    </Card>
                </div>
            </div>
            <Footer />
        </Section>
    )
}

export default Dashboard;