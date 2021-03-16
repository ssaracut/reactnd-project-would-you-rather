import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { withRouter, matchPath } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = ({ history, authedUser, users }) => {

  const [menuRoutes] = useState([
    { route: '/', name: 'Home' },
    { route: '/add', name: 'New Question' },
    { route: '/leaderboard', name: 'Leader Board' },
    { route: '/questions/:question_id', name: undefined }
  ])

  const [activeItem, setActiveItem] = useState()

  useEffect(() => {
    const name = menuRoutes.find(menu => matchPath(history.location.pathname, { path: menu.route, exact: true })).name
    setActiveItem(name)
  }, [history.location.pathname, menuRoutes])

  const handleItemClick = (e, { index }) => {
    const { route } = menuRoutes[index]
    //the effect above will take care of this
    //setActiveItem(name)
    history.push(route)
  }

  return (
    <Menu pointing secondary>
      <Menu.Item
        index={0}
        name={menuRoutes[0].name}
        active={activeItem === menuRoutes[0].name}
        onClick={handleItemClick} />
      <Menu.Item
        index={1}
        name={menuRoutes[1].name}
        active={activeItem === menuRoutes[1].name}
        onClick={handleItemClick} />
      <Menu.Item
        index={2}
        name={menuRoutes[2].name}
        active={activeItem === menuRoutes[2].name}
        onClick={handleItemClick} />
      {        authedUser &&
        <Menu.Menu position='right'>
          <Menu.Item>
            {`Hello, ${users[authedUser].name}`}
          </Menu.Item>
          <Menu.Item>
            <a href="/">Logout</a>
          </Menu.Item>
        </Menu.Menu>
      }
    </Menu>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users
})

export default withRouter(connect(mapStateToProps)(Nav))