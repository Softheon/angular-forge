import { EntityTemplateModel } from '../../shared/models/entityTemplateModel';

export const getEntityTemplateResMock: EntityTemplateModel = {
    'type': 8,
    'name': 'Airplane',
    'category': 'Transportation',
    'profiles': [
        {
            'name': 'General Characteristics',
            'index': 1,
            'fields': [
                {
                    'name': 'Wingspan (m)',
                    'type': 'Double'
                },
                {
                    'name': 'Height (m)',
                    'type': 'Double'
                },
                {
                    'name': 'Number Built',
                    'type': 'Integer'
                },
                {
                    'name': 'Introduction',
                    'type': 'Integer'
                },
                {
                    'name': 'Model',
                    'type': 'String'
                },
                {
                    'name': 'Length (m)',
                    'type': 'Double'
                },
                {
                    'name': 'Crew',
                    'type': 'Integer'
                },
                {
                    'name': 'First Flight',
                    'type': 'DateTime'
                },
                {
                    'name': 'Make',
                    'type': 'String'
                },
                {
                    'name': 'Capacity',
                    'type': 'Integer'
                }
            ]
        },
        {
            'name': 'Performance',
            'index': 2,
            'fields': [
                {
                    'name': 'Cruise speed (km/h)',
                    'type': 'Integer'
                },
                {
                    'name': 'Maximum speed (km/h)',
                    'type': 'Integer'
                },
                {
                    'name': 'Range (km/h)',
                    'type': 'Integer'
                },
                {
                    'name': 'Rate of climb (m/s)',
                    'type': 'Double'
                }
            ]
        }
    ],
    'creationTime': new Date('2019-02-19T17:42:28.473+00:00'),
    'modificationTime': new Date('2019-02-14T22:52:12+00:00'),
    'smallImage': '',
    'largeImage': '',
    'hasAudit': false,
    'allowViewImages': false,
    'isReviewState': false
};

export const createEntityResMock = {
    'ID': 54,
    'Name': '175 Skylark Cessna',
    'CreatedDateTime': '2019-02-25T16:09:51+00:00',
    'ModifiedDateTime': '2019-02-25T16:09:51+00:00',
    'CreatedUserName': 'John Paul Pennisi',
    'CreatedUserId': 62,
    'ModifiedUserName': 'John Paul Pennisi',
    'ModifiedUserId': 62,
    'General Characteristics': {
        'Wingspan (m)': 11.02,
        'Height (m)': 2.72,
        'Number Built': 2106,
        'Introduction': 1958,
        'Model': '175 Skylark',
        'Length (m)': 8.08,
        'Crew': 1,
        'First Flight': '1956-04-23T00:00:00Z',
        'Make': 'Cessna',
        'Capacity': 3
    },
    'Performance': {
        'Cruise speed (km/h)': 104,
        'Maximum speed (km/h)': 241,
        'Range (km/h)': 1159,
        'Rate of climb (m/s)': 4.8
    }
};
