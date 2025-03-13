from django.urls import path
from . import views
from django.http import JsonResponse

def api_home(request):
    return JsonResponse({"message": "Welcome to the API!"})

urlpatterns = [
    path("", api_home, name="api-home"),
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]
