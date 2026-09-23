import { getWorkOuts } from '@/lib/workOuts';
import { WorkOutType } from '@/types/workOut';
import React from 'react';

const Exercise =async() => {
    const workOuts: WorkOutType[] = await getWorkOuts()


    return (

        <div>
            <h1>This is Exercise Page : {workOuts.length}</h1>
        </div>
    );
};

export default Exercise;