import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import { Icon as IconBase, IIconProps as IIconBaseProps } from "../Icon";

// _glyph
import { withGlyphBell } from "../_glyph/Icon_glyph_bell";
import { withGlyphCart } from "../_glyph/Icon_glyph_cart";

// social
import { withSocialYouTube } from "../_social/Icon_social_youtube";
import { withSocialTwitter } from "../_social/Icon_social_twitter";
import { withSocialFacebook } from "../_social/Icon_social_facebook";
import { withSocialInstagram } from "../_social/Icon_social_instagram";

export * from "../Icon";

export interface IIconProps extends IIconBaseProps {
    glyph?:
        | "bell"
        | "cart";
    social?: "youtube" | "twitter" | "facebook" | "instagram";
}

export const Icon = compose(
    composeU(
        withGlyphBell,
        withGlyphCart,
    ),
    composeU(
        withSocialYouTube,
        withSocialTwitter,
        withSocialInstagram,
        withSocialFacebook
    )
)(IconBase) as FC<IIconProps>;
