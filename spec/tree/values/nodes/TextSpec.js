import TextContainer from "../../../../src/tree/values/nodes/TextContainer";
import FormattingElement from "../../../../src/tree/values/FormattingElement";

describe( "Text tree node", () => {
	it( "can make a new Text tree node", () => {
		const formatting = [
			new FormattingElement( "a", 25, 29 ),
		];
		const text = "This is some text with a link.";
		const textContainer = new TextContainer( text, formatting );

		expect( textContainer.formatting ).toEqual( textContainer.formatting );
		expect( textContainer.text ).toEqual( text );
	} );

	describe( "can generate an HTML-string from the text and accompanying formatting.", () => {
		it( "can generate an HTML-string from multiple formatting elements.", () => {
			const formatting = [
				new FormattingElement( "strong", 0, 4 ),
				new FormattingElement( "a", 25, 29, {
					href: "https://example.com",
				} ),
			];
			const text = "This is some text with a link.";
			const textContainer = new TextContainer( text, formatting );

			expect( textContainer.toHtml() ).toEqual(
				"<strong>This</strong> is some text with a <a href=\"https://example.com\">link</a>."
			);
		} );

		/**
		 * Nested content does not work yet...
		 */
		it.skip( "can generate an HTML-string from multiple nested formatting elements.", () => {
			const formatting = [
				new FormattingElement( "strong", 24, 37 ),
				new FormattingElement( "em", 23, 38 ),
			];
			const text = "This is some text with strong emphasis.";
			const textContainer = new TextContainer( text, formatting );

			expect( textContainer.toHtml() ).toEqual(
				"This is some text with <em><strong>strong emphasis</strong></em>."
			);
		} );
	} );
} );
