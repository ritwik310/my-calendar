import gql from 'graphql-tag';

export const FETCH_ALL_GROUPS = gql`
	query readAllGroups {
		readAllGroups {
			_id
			title
			hex_color
			_rank
			# _isOnCalendar
			_isPermanent
			_events {
				_id
				title
				description
				hex_color
				date_from
				date_to
				# notification
				# _isDeleted
				_isDone
				_rank
				_group
			}
		}
	}
`;

export const FETCH_ALL_GROUPS_ON_CALENDAR = gql`
	query readGroupsOnCalendar {
		readGroupsOnCalendar {
			_id
			title
			hex_color
			_rank
			_isOnCalendar
			_isPermanent
			_events {
				_id
				title
				description
				hex_color
				date_from
				date_to
				# notification
				# _isDeleted
				_isDone
				_rank
				_group
			}
		}
	}
`;

export const FETCH_STEPS_BY_EVENT = gql`
	query readStepsByEvent($eventId: ID!) {
		readStepsByEvent(eventId: $eventId) {
			_id
			title
			_isDone
			_rank
			_event
		}
	}
`;

export const FETCH_CURRENT_USER = gql`
	query currentUser {
		currentUser {
			_id
			googleId
			facebookId
			email
			name
			avatar_url
			custom_colors
		}
	}
`;
