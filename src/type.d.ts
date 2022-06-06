declare module "html2pdf.js" {
  type pagebreakMode = "css" | "legacy" | "avoid-all";

  function html2pdf(
    element: HTMLElement,
    opt?: {
      margin?: number;
      filename?: string;
      enableLinks?: boolean;
      pagebreak?: {
        mode?: pagebreakMode | pagebreakMode[];
        before?: string | string[];
        after?: string | string[];
        avoid?: string | string[];
      };
    }
  ): Promise<void>;
  export = html2pdf;
}
