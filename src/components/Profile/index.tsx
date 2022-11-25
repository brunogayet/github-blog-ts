import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

import { ProfileContainer, ProfileContent, ProfileInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

interface ProfileProps {
  login: string
  name: string
  avatar: string
  bio: string
  following: number
  company: string | null
  url: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  const getProfileInfo = async () => {
    const {
      data: {
        name,
        login,
        avatar_url: avatar,
        bio,
        following,
        company,
        html_url: url,
      },
    } = await api.get('/users/brunogayet')

    setProfile({
      name,
      login,
      avatar,
      bio,
      following,
      company,
      url,
    })
  }

  useEffect(() => {
    getProfileInfo()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={profile.avatar} alt="Imagem profile" />

        <ProfileInfo>
          <header>
            <h1>{profile.name}</h1>
            <div>
              <a href={profile.url}>
                <span>GITHUB</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </header>

          <p>{profile.bio}</p>

          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile.login}</span>
            </div>

            {profile.company && (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{profile.company}</span>
              </div>
            )}

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>
                {profile.following} seguidor{profile.following > 1 && 'es'}
              </span>
            </div>
          </footer>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
