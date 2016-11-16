from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from translations.models import Translation
from translations.serializers import TranslationSerializer

class TranslationList(APIView):
    """
    List all translations
    """
    def get(self, request, format=None):
        translations = Translation.objects.all()
        serializer = TranslationSerializer(translations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TranslationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
