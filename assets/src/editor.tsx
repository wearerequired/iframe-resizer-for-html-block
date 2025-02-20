import { useRef } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, CheckboxControl, TextareaControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const withIframeResizingInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/html' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { isIframeResizerEnabled, content } = attributes;

		const codeTextareaRef = useRef< HTMLTextAreaElement >( null );

		const onCodeFocus = () => {
			codeTextareaRef.current?.focus();
			codeTextareaRef.current?.select();
		};

		if ( -1 === content?.indexOf( '<iframe ' ) ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<>
				<BlockEdit key="edit" { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Settings', 'iframe-resizer-for-html-block' ) }>
						<CheckboxControl
							label={ __(
								'Enable iframe resizing',
								'iframe-resizer-for-html-block'
							) }
							checked={ isIframeResizerEnabled }
							onChange={ () => {
								setAttributes( {
									isIframeResizerEnabled: ! isIframeResizerEnabled,
								} );
							} }
							__nextHasNoMarginBottom
						/>

						{ isIframeResizerEnabled && (
							<>
								<p>
									{ __(
										'Please include the following script in the iframe.',
										'iframe-resizer-for-html-block'
									) }
								</p>

								<TextareaControl
									ref={ codeTextareaRef }
									label={ __( 'Code snippet', 'iframe-resizer-for-html-block' ) }
									hideLabelFromVision
									value={ `<script src="${
										( window as any ).iframeResizerChildScriptSrc
									}" async></script>` }
									readOnly
									onChange={ () => {} }
									onFocus={ onCodeFocus }
									__nextHasNoMarginBottom
								/>
							</>
						) }
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withIframeResizingInspectorControls' );

addFilter(
	'editor.BlockEdit',
	'iframe-resizer-for-html-block/with-iframe-resizing-inspector-controls',
	withIframeResizingInspectorControls
);
