import React from 'react';

export default function StudentsRouter() {


  useEffect(() => {
    getStudents()
  }, []);

  return (
    <>
      {(view === 'table') && (
        <StudentsTable
          studentsById={studentsById}
          setCurrentStudentId={setCurrentStudentId}
          setView={setView}
        />
      )}
      {(view === 'student') && (
        <UserCard
          user={studentsById[currentStudentId]}
          setView={setView}
        />
      )}
      {(view === 'edit') && (
        <UserEdit
          user={studentsById[currentStudentId]}
          setView={setView}
        />
      )}
    </>
  )


}
