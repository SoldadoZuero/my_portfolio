from django.urls import path

from . import views

app_name = 'principal'

urlpatterns = [
    path(
        '',
        views.PrincipalHome.as_view(),
        name="home"
    ),
    path(
        'projects',
        views.PrincipalProjects.as_view(),
        name="projects"
    )
]
