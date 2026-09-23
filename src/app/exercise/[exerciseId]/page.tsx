import { getWorkOuts } from '@/lib/workOuts';
import { WorkOutType } from '@/types/workOut';
import React from 'react';


const ExerciseDetailPage = async ({params} :{
  params: Promise<{ exerciseId: string }>;
}) => {
    const {exerciseId} = await params;
    const allWorkOuts = await getWorkOuts()

    const workOut = allWorkOuts.find((workOut : WorkOutType) => workOut.id === Number(exerciseId))

    return (
        <div>
            <h1>Exercise Page: {workOut?.name} </h1>
        </div>
    );
};

export default ExerciseDetailPage;