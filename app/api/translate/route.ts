import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const source_lang = formData.get('source_lang') as string;
    const target_lang = formData.get('target_lang') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'Nenhum arquivo fornecido' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta' },
        { status: 500 }
      );
    }

    // SIMULAÇÃO - REMOVA DEPOIS E IMPLEMENTE EXTRACTION REAL
    const testResponse = {
      filename: file.name,
      total_pages: 2,
      pages: [
        {
          page_number: 1,
          original: "This is a test page content in English for the translation demo.",
          translated: "Este é um conteúdo de página de teste em Inglês para a demonstração de tradução."
        },
        {
          page_number: 2, 
          original: "Second page with more example text for translation testing purposes.",
          translated: "Segunda página com mais texto de exemplo para fins de teste de tradução."
        }
      ],
      source_lang,
      target_lang
    };

    return NextResponse.json(testResponse);

  } catch (error: any) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { error: `Erro interno: ${error.message}` },
      { status: 500 }
    );
  }
}
