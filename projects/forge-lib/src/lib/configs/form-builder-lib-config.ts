export interface FormBuilderConfig {
    /**
     * The URL for Softheon Forge
     */
    forgeApiUrl: string;

    /**
     * The account name
     */
    accountName: string;

    /**
     * The OAuth Token
     */
    oauthToken: string;

    /**
     *  the Form Name, If provided load that form to edit instead of a new form
     */
    formName?: string;
}