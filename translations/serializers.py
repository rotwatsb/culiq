from rest_framework import serializers

from langdetect import detect

from translations.models import Translation
from translations.translator import translate

class TranslationSerializer(serializers.Serializer):

    id = serializers.IntegerField(read_only=True)
    foreign_text = serializers.CharField(required=True)
    language = serializers.CharField(required=False, read_only=True)
    english_text = serializers.CharField(required=False, read_only=True)
    
    def create(self, validated_data):
        t = Translation.objects.create(**validated_data)
        t.language = detect(t.foreign_text)
        t.english_text = translate(t.foreign_text, t.language)
        t.save()
        return t
