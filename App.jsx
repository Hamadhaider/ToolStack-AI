import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// PDF Tools
import PDFMergePage from './pages/tools/PDFMergePage';
import PDFSplitPage from './pages/tools/PDFSplitPage';
import PDFCompressPage from './pages/tools/PDFCompressPage';
import PDFToWordPage from './pages/tools/PDFToWordPage';
import WordToPDFPage from './pages/tools/WordToPDFPage';
import PDFToJPGPage from './pages/tools/PDFToJPGPage';
import JPGToPDFPage from './pages/tools/JPGToPDFPage';
import PDFSummarizerPage from './pages/tools/PDFSummarizerPage';
import PDFTranslatorPage from './pages/tools/PDFTranslatorPage';
import PDFToQuizPage from './pages/tools/PDFToQuizPage';
import PDFToFlashcardsPage from './pages/tools/PDFToFlashcardsPage';

// Image Tools
import BackgroundRemoverPage from './pages/tools/BackgroundRemoverPage';
import ImageUpscalerPage from './pages/tools/ImageUpscalerPage';
import ImageEnhancerPage from './pages/tools/ImageEnhancerPage';
import ImageCompressorPage from './pages/tools/ImageCompressorPage';
import JPGToPNGPage from './pages/tools/JPGToPNGPage';
import PNGToJPGPage from './pages/tools/PNGToJPGPage';
import WatermarkRemoverPage from './pages/tools/WatermarkRemoverPage';
import BlurRemoverPage from './pages/tools/BlurRemoverPage';
import PassportPhotoMakerPage from './pages/tools/PassportPhotoMakerPage';

// AI Tools
import TextSummarizerPage from './pages/tools/TextSummarizerPage';
import EssayGeneratorPage from './pages/tools/EssayGeneratorPage';
import GrammarFixerPage from './pages/tools/GrammarFixerPage';
import AINoteMakerPage from './pages/tools/AINoteMakerPage';
import QuizGeneratorPage from './pages/tools/QuizGeneratorPage';
import ResearchSimplifierPage from './pages/tools/ResearchSimplifierPage';
import ResumeBuilderPage from './pages/tools/ResumeBuilderPage';
import CoverLetterGeneratorPage from './pages/tools/CoverLetterGeneratorPage';
import CitationGeneratorPage from './pages/tools/CitationGeneratorPage';

// Utility Tools
import QRCodeGeneratorPage from './pages/tools/QRCodeGeneratorPage';
import BarcodeGeneratorPage from './pages/tools/BarcodeGeneratorPage';
import PasswordGeneratorPage from './pages/tools/PasswordGeneratorPage';
import AgeCalculatorPage from './pages/tools/AgeCalculatorPage';
import PercentageCalculatorPage from './pages/tools/PercentageCalculatorPage';
import UnitConverterPage from './pages/tools/UnitConverterPage';
import WordCounterPage from './pages/tools/WordCounterPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/about" element={<AboutPage />} />
                
                {/* PDF Tools */}
                <Route path="/tools/pdf-merge" element={<PDFMergePage />} />
                <Route path="/tools/pdf-split" element={<PDFSplitPage />} />
                <Route path="/tools/pdf-compress" element={<PDFCompressPage />} />
                <Route path="/tools/pdf-to-word" element={<PDFToWordPage />} />
                <Route path="/tools/word-to-pdf" element={<WordToPDFPage />} />
                <Route path="/tools/pdf-to-jpg" element={<PDFToJPGPage />} />
                <Route path="/tools/jpg-to-pdf" element={<JPGToPDFPage />} />
                <Route path="/tools/pdf-summarizer" element={<PDFSummarizerPage />} />
                <Route path="/tools/pdf-translator" element={<PDFTranslatorPage />} />
                <Route path="/tools/pdf-to-quiz" element={<PDFToQuizPage />} />
                <Route path="/tools/pdf-to-flashcards" element={<PDFToFlashcardsPage />} />
                
                {/* Image Tools */}
                <Route path="/tools/background-remover" element={<BackgroundRemoverPage />} />
                <Route path="/tools/image-upscaler" element={<ImageUpscalerPage />} />
                <Route path="/tools/image-enhancer" element={<ImageEnhancerPage />} />
                <Route path="/tools/image-compressor" element={<ImageCompressorPage />} />
                <Route path="/tools/jpg-to-png" element={<JPGToPNGPage />} />
                <Route path="/tools/png-to-jpg" element={<PNGToJPGPage />} />
                <Route path="/tools/watermark-remover" element={<WatermarkRemoverPage />} />
                <Route path="/tools/blur-remover" element={<BlurRemoverPage />} />
                <Route path="/tools/passport-photo-maker" element={<PassportPhotoMakerPage />} />
                
                {/* AI Tools */}
                <Route path="/tools/text-summarizer" element={<TextSummarizerPage />} />
                <Route path="/tools/essay-generator" element={<EssayGeneratorPage />} />
                <Route path="/tools/grammar-fixer" element={<GrammarFixerPage />} />
                <Route path="/tools/ai-note-maker" element={<AINoteMakerPage />} />
                <Route path="/tools/quiz-generator" element={<QuizGeneratorPage />} />
                <Route path="/tools/research-simplifier" element={<ResearchSimplifierPage />} />
                <Route path="/tools/resume-builder" element={<ResumeBuilderPage />} />
                <Route path="/tools/cover-letter-generator" element={<CoverLetterGeneratorPage />} />
                <Route path="/tools/citation-generator" element={<CitationGeneratorPage />} />
                
                {/* Utility Tools */}
                <Route path="/tools/qr-code-generator" element={<QRCodeGeneratorPage />} />
                <Route path="/tools/barcode-generator" element={<BarcodeGeneratorPage />} />
                <Route path="/tools/password-generator" element={<PasswordGeneratorPage />} />
                <Route path="/tools/age-calculator" element={<AgeCalculatorPage />} />
                <Route path="/tools/percentage-calculator" element={<PercentageCalculatorPage />} />
                <Route path="/tools/unit-converter" element={<UnitConverterPage />} />
                <Route path="/tools/word-counter" element={<WordCounterPage />} />
                
                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;
