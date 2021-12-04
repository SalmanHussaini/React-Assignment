import React, { useState } from 'react';
import './Issues.scss';
import Issue from './Issue';


const Issues = () => {
    const [issues, setIssues] = useState([
        {
            id: 0,
            text: 'Progress bar when run`npm run build`',
            isOpen: true,
            number: '#8879',
            badges: [
                {
                    text: 'issue : bug report',
                    color: 'orange'
                },
                {
                    text: 'issue : proposal',
                    color: 'yellow'
                }
            ]
        },


        {
            id: 1,
            text: 'Renaming file or folder',
            isOpen: true,
            number: '#8880',
            badges: [
                {
                    text: 'issue : bug report',
                    color: 'orange'
                },
                {
                    text: 'issue : proposal',
                    color: 'yellow'
                }
            ]
        },



        {
            id: 2,
            text: 'Yarn not starting',
            isOpen: true,
            number: '#8881',
            badges: [
                {
                    text: 'issue : need triage',
                    color: 'orange'
                },
                {
                    text: 'issue : proposal',
                    color: 'yellow'
                }
            ]
        },


        {
            id: 3,
            text: 'Images are not found in manifest',
            isOpen: true,
            number: '#8882',
            badges: [
                {
                    text: 'issue : bug report',
                    color: 'red'
                },
                {
                    text: 'issue : proposal',
                    color: 'yellow'
                }
            ]
        },

        {
            id: 4,
            text: 'Progress bar when run`npm run build`',
            isOpen: true,
            number: '#8879',
            badges: [
                {
                    text: 'issue : bug report',
                    color: 'red'
                },
                {
                    text: 'issue : proposal',
                    color: 'yellow'
                }
            ]
        }
    ]);

    return (
        <div className="Issues">
            {issues.map(issue => {
                return (
                    <Issue
                        key={issue.id}
                        id={issue.id}
                        text={issue.text}
                        isOpen={issue.isOpen}
                        number={issue.number}
                        badges={issue.badges}
                    />
                );
            })}
        </div>
    );
};
export default Issues;





