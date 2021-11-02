from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from api.serializers import noteSerializer, contactSerializer, registerNewUserSerializer
from api.models import contact, notes
from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework import status

from rest_framework.permissions import IsAuthenticated


# Creating, reading and updating all notes

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    if request.method == 'GET':
        user = request.user
    
        # allnotes = notes.objects.all()
        allnotes = notes.objects.filter(user=user)
        serializer = noteSerializer(allnotes, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        serializer = noteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PUT':
        id = request.data.get('id')
        note = notes.objects.get(id=id)
        serializer = noteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        id = request.data.get('id')
        note = notes.objects.get(id=id)
        note.delete()

    

# api for creating contact
class contactApi(CreateAPIView):
    queryset = contact.objects.all()
    serializer_class = contactSerializer


# api for creating new user
class createNewUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = registerNewUserSerializer


