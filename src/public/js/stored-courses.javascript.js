document.addEventListener('DOMContentLoaded', function () {
    var courseId;
    var deleteForm = document.forms['delete-course-form'];
    var btnDeleteCourse = document.getElementById('btn-delete-course');

    var deleteModal = document.getElementById('delete-course-modal');
    deleteModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        courseId = button.getAttribute('data-id');
        var name = button.getAttribute('data-name');
        var msg = document.getElementById('msg');
        msg.innerHTML = `Do you need to delete the course ${name}?`;
    });

    btnDeleteCourse.addEventListener('click', function (event) {
        deleteForm.action = `/courses/delete/${courseId}?_method=DELETE`;
        deleteForm.submit();
    });
});
